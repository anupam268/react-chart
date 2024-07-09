import React from 'react';
import 'tailwindcss/tailwind.css';
import BasicScatter from './ScatterChart';
import SimpleAreaChart from './AreaChart';
import BasicPie from './PieChart';
import BasicBars from './BarChart';
import sample from './icons/sample.png';
import defect from './icons/defect.png';
import error from './icons/error.png';
import medal from './icons/medal.png';
import total from './icons/total.png';

const Dashboard = () => {
    return (
        <div className="bg-gray-100 p-4">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-8">
                    <h1 className="text-3xl font-bold">Project Health Monitoring Dashboard for Quality Management Plan</h1>
                    <p className="text-gray-600">This slide illustrates quality management dashboard that can help organization to plan and identify the defects and fatal errors of project. Its key elements are total tasks, sample, quality score, defect analysis, quality score and sampling percentage</p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                    <div className="card bg-violet-500 text-white p-4 rounded-lg text-center flex items-center">
                        <div className="relative mr-4">
                            <div className="bg-violet-300 rounded-full w-16 h-16 flex items-center justify-center">
                                <img src={total} alt="Clipboard Icon" className="w-8 h-8" />
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow justify-between">
                            <div className="text-5xl font-bold mb-6">132K</div>
                            <div className="border-t border-grey-300 mb-4"></div>
                            <div className="text-lg">Total Task</div>
                        </div>
                    </div>
                    <div className="card bg-indigo-500 text-white p-4 rounded-lg text-center flex items-center">
                        <div className="relative mr-4">
                            <div className="bg-indigo-300 rounded-full w-16 h-16 flex items-center justify-center">
                                <img src={sample} alt="Hand Icon" className="w-8 h-8" />
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow justify-between">
                            <div className="relative mb-4">
                                <div className="text-3xl font-bold mb-5">9861</div>
                                <div className="absolute bottom-0 right-0 text-xs" style={{ marginTop: '4px' }}>7.54%</div>
                            </div>
                            <div className="border-t border-grey-300 mb-4"></div>
                            <div className="text-lg">Sample</div>
                        </div>
                    </div>
                    <div className="card bg-blue-500 text-white p-4 rounded-lg text-center flex items-center">
                        <div className="relative mr-4">
                            <div className="bg-blue-200 rounded-full w-16 h-16 flex items-center justify-center">
                                <img src={defect} alt="Exclamation Icon" className="w-8 h-8" />
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow justify-between">
                            <div className="relative mb-4">
                                <div className="text-3xl font-bold mb-5">1985</div>
                                <div className="absolute bottom-0 right-0 text-xs" style={{ marginTop: '4px' }}>20.13%</div>
                            </div>
                            <div className="border-t border-grey-300 mb-4"></div>
                            <div className="text-lg">Defects</div>
                        </div>
                    </div>
                    <div className="card bg-yellow-500 text-white p-4 rounded-lg text-center flex items-center">
                        <div className="relative mr-4">
                            <div className="bg-yellow-300 rounded-full w-16 h-16 flex items-center justify-center">
                                <img src={error} alt="X Circle Icon" className="w-8 h-8" />
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow justify-between">
                            <div className="relative mb-4">
                                <div className="text-3xl font-bold mb-5">802</div>
                                <div className="absolute bottom-0 right-0 text-xs" style={{ marginTop: '4px' }}>8.13%</div>
                            </div>
                            <div className="border-t border-grey-300 mb-4"></div>
                            <div className="text-lg">Fatal Error</div>
                        </div>
                    </div>
                    <div className="card bg-orange-500 text-white p-4 rounded-lg text-center flex items-center">
                        <div className="relative mr-4">
                            <div className="bg-orange-300 rounded-full w-16 h-16 flex items-center justify-center">
                                <img src={medal} alt="Check Circle Icon" className="w-8 h-8" />
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow justify-between items-center">
                            <div className="relative w-16 h-16 mb-4">
                                <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 36 36">
                                    <path className="text-gray-300" d="M18 2.0845a15.9155 15.9155 0 1 0 0 31.831 15.9155 15.9155 0 1 0 0-31.831" fill="none" stroke="currentColor" strokeWidth="2"></path>
                                    <path className="text-white" d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="70, 100"></path>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center text-l font-bold">70%</div>
                            </div>
                            <div className="border-t border-grey-300 mb-4 w-full"></div>
                            <div className="text-lg">Quality Score</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-4 lg:col-span-3">
                        <h2 className="text-xl font-bold mb-4">Sample Vs Defects Analysis</h2>
                        <div className="chart-container">
                            <BasicScatter />
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 lg:col-span-2">
                        <h2 className="text-xl font-bold mb-4">Quality Score by Supervisor</h2>
                        <div className="chart-container">
                            <BasicPie />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                    <div className="bg-white rounded-lg shadow-md p-4 lg:col-span-3">
                        <h2 className="text-xl font-bold mb-4">Fatal Error by Month</h2>
                        <div className="chart-container">
                            <SimpleAreaChart />
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 lg:col-span-2">
                        <h2 className="text-xl font-bold mb-4">Sampling% by Auditor Name</h2>
                        <div className="chart-container">
                            <BasicBars />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
