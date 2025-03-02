import React, { useEffect, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';
import SummaryApi from '../common';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const user =useSelector(state => state?.user?.user)

    const navigate = useNavigate();

    const [data, setData] = useState({
        title: "",
        image: "",
        content: "",
        creatorName: user?.name,
        creator: user?._id,
    });

    const handleChange = (e) => {
        const { name , value } = e.target
        setData((preve)=>{
            return {
                ...preve,
                [name] : value
            }
        })
    };

    const transformFile = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setData({ ...data, image: reader.result });
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataResponse = await fetch(SummaryApi.createBlog.url,{
            method: SummaryApi.createBlog.method,
            headers: {
                "content-type":"application/json"
            },
            credentials : 'include',
            body : JSON.stringify(data)
        })

        const dataApi = await dataResponse.json();

        if(dataApi.success){
            toast.success(dataApi?.message);
            navigate('/Blog');
        }
        if(dataApi.error){
            toast.error(dataApi?.message)
        }

    };

    return (
        <div className="bg-purple-300 mt-0">
            <div className="absolute inset-0 h-full bg-[radial-gradient(white_2px,transparent_2px)] bg-[size:12px_12px] opacity-30"></div>
            <div className="max-w-5xl mx-auto p-6 mt-14">
                <h1 className="text-3xl text-center mb-6 text-white">Latest Blogs on Salary Prediction</h1>

                {/* Blog List Section */}
                <div className="overflow-y-auto max-h-96 min-h-64 bg-white p-4 rounded-lg shadow-md space-y-4">
                    <h2 className="text-purple-400 text-2xl">Blogs :</h2>
                    <div className="space-y-4">
                        {blogs.map((blog, index) => (
                            <div key={index} className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition">
                                <div className="flex items-center space-x-4 cursor-pointer" onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}>
                                    <img src={blog.image} alt={blog.title} className="w-16 h-16 rounded" />
                                    <h2 className="text-lg font-semibold text-gray-800">{blog.title}</h2>
                                </div>
                                {expandedIndex === index && (
                                    <p className="mt-2 text-gray-600">{blog.content}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 p-6 border rounded-lg shadow-md bg-white">
                    <h2 className="text-xl mb-4 flex items-center text-purple-600"><FaRegEdit className="mr-2" /> Submit Your Blog</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Blog Title */}
                        <div className="mb-4">
                            <label className="block text-sm text-gray-700 mb-2">Blog Title *</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded"
                                placeholder="Title Of The Blog"
                                name='title' value={data.title} onChange={handleChange} required
                            />
                        </div>

                        {/* Image Upload Section */}
                        <div className="mb-4">
                            <label className="block text-sm text-gray-700 mb-2">Upload Image *</label>
                            <input
                                encType="multipart/form-data"
                                type="file"
                                className="w-full p-2 border rounded cursor-pointer"
                                placeholder="Image Of Your Blog"
                                name='image'  onChange={(e) => transformFile(e)} required
                            />
                            {data.image && (
                                <div className="mt-2">
                                    <p className="text-sm text-gray-600">Preview:</p>
                                    <img src={data.image} alt="Preview" className="mt-2 w-32 h-32 rounded shadow-md object-cover" />
                                </div>
                            )}
                        </div>

                        {/* Blog Content */}
                        <div className="mb-4">
                            <label className="block text-sm text-gray-700 mb-2">Blog Content *</label>
                            <textarea
                                className="w-full p-2 border rounded cursor-pointer"
                                rows="4"
                                // placeholder="Content Of Your Blog"
                                name='content' value={data.content} onChange={handleChange} required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600">Submit Blog</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
