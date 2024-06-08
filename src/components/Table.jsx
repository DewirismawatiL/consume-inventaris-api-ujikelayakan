import React, { useState } from "react";
import ModalDelete from "./ModalDelete";
import ModalAdd from "./ModalAdd"; // Ensure this component is imported
import ModalEdit from "./ModalEdit";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Table({ dataTh, dataTd, columnDb, buttonData, endpoints, columnDetail, judulModalEdit, inputData }) {
    const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
    const [endpointReplaced, setEndpointReplaced] = useState({});
    const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
    const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);


    function handleModalDelete(id) {
        const endpointsDetail = endpoints['detail'];
        const endpointsDelete = endpoints['delete'];
        const detailReplaced = endpointsDetail.replace('{id}', id);
        const deleteReplaced = endpointsDelete.replace('{id}', id);
        const replaced = {
            "detail": detailReplaced,
            "delete": deleteReplaced
        };
        setEndpointReplaced(replaced);
        setIsOpenModalDelete(true);
    }

    function handleModalEdit(id) {
        const endpointsDetail = endpoints['detail'];
        const endpointsUpdate = endpoints['update'];
        const detailReplaced = endpointsDetail.replace('{id}', id);
        const updateReplaced = endpointsUpdate.replace('{id}', id);
        const replaced = {
            "detail": detailReplaced,
            "update": updateReplaced
        };
        setEndpointReplaced(replaced);
        setIsOpenModalEdit(true);
    }

    function handleModalAdd() {
        const replaced = {
            "store": endpoints['store'],
        }
        setEndpointReplaced(replaced);
        setIsOpenModalAdd(true);
    }

    const navigate = useNavigate();

    function handleRestore(id) {
        // ubah {id} menjadi id yang di klik
        let endpointRestore = endpoints['restore'].replace("{id}", id);
        axios.get(endpointRestore, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
        })
        .then(res => {
            // ketika berhasil, arahkan ke path / stuffs
            navigate('/stuffs')
        })
        .catch(err => {
            console.log(err)
            if (err.response.status == 401) {
                navigate('/login?message=' + encodeURIComponent('Anda belum login!'));
            }

        })
    }

    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-20 py-10 mt-20">
            <div className="flex justify-end mb-5">
            {
                buttonData.includes("create") ? (
                    <button onClick={handleModalAdd} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Create</button>

                ): ''
            }
            {
                buttonData.includes("trash") ? (
                    <Link to={'/stuffs/trash'} class="ml-2 focus:outline-none text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">Trash</Link>

                ): ''
            }
            </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {dataTh.map((data, index) => (
                                <th scope="col" className="px-6 py-3 items-center bg-blue-100" key={index}>{data}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(dataTd).map(([index, value]) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4">{parseInt(index) + 1}.</td>
                                {Object.entries(columnDb).map(([i, v]) => (
                                    <td key={i} className="px-6 py-4">{!v ? value[i] : value[i.replace(/[!@#$%^&]/, '')] ? value[i.replace(/[!@#$%^&]/, '')][v] : 0}</td>
                                ))}
                                <td className="px-5 py-4">
                                    {
                                        buttonData.includes("edit") ? (
                                            <a onClick={() => handleModalEdit(value.id)} href="#" className="px-2 font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        ) : ''
                                    }
                                    {
                                        buttonData.includes("delete") ? (
                                            <a onClick={() => handleModalDelete(value.id)} href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ml-3">Delete</a>
                                        ) : ''
                                    }   
                                    {
                                        buttonData.includes("restore") ? (
                                            <a href="#" onClick={() => handleRestore(value.id)} className="font-medium text-green-600 dark:text-green-500 hover:underline ml-3">Restore</a>
                                        ) : ''
                                    }     
                                    {
                                        buttonData.includes("permanent-delete") ? (
                                            <a onClick={() => handleModalDelete(value.id)} href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ml-3">Permanent delete</a>
                                        ) : ''
                                    }                 
                                    </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ModalDelete isOpen={isOpenModalDelete} closeModal={() => setIsOpenModalDelete(false)} endpoints={endpointReplaced} columnDetail={columnDetail}></ModalDelete>
            <ModalEdit isOpen={isOpenModalEdit} closeModal={() => setIsOpenModalEdit(false)} judulModal={judulModalEdit} inputData={inputData} endpoints={endpointReplaced}></ModalEdit>
            <ModalAdd isOpen={isOpenModalAdd} closeModal={() => setIsOpenModalAdd(false)} judulModal={judulModalEdit} inputData={inputData} endpoints={endpointReplaced}></ModalAdd>

        </>
    );
}
