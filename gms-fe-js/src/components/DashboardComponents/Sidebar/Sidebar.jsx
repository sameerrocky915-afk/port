'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight, ChevronLeft } from 'lucide-react';

const Sidebar = () => {

    const [expandedSections, setExpandedSections] = useState({
        setup: true,
        registration: false,
        deployment: false,
        attendance: false,
        payroll: false,
        accounts: false,
        salesMonitor: false,
        performanceManager: false,
        inventoryManagement: false,
        complaints: false,
        notifications: false,
        reports: false
    });

    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <div className={`transition-all duration-200 ${sidebarOpen ? 'w-[270px]' : 'w-[60px]'} h-screen bg-white border-r border-gray-200 overflow-y-auto`}>
            <div className="p-3">
                {/* Sidebar Toggle Arrow */}
                <div className="flex items-center justify-end mb-2">
                    <button
                        onClick={() => setSidebarOpen((prev) => !prev)}
                        className="p-1 rounded hover:bg-gray-100 focus:outline-none"
                        aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
                    >
                        {sidebarOpen ? (
                            <ChevronLeft className="h-5 w-5 text-gray-500" />
                        ) : (
                            <ChevronRight className="h-5 w-5 text-gray-500" />
                        )}
                    </button>
                </div>

                {/* Dashboards Section */}
                <div className="mb-6">
                    <h3 className={`text-xs font-medium text-gray-500 uppercase tracking-wider mb-3 ${!sidebarOpen ? 'hidden' : ''}`}>
                        Dashboards
                    </h3>
                    <Link
                        href="/dashboard"
                        className="flex items-center px-3 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                        <img src='/icons/overview.png' className="mr-3 h-4 w-4" />
                        {sidebarOpen && 'Overview'}
                    </Link>
                </div>

                <div>
                    <h3 className={`text-xs font-medium text-gray-500 uppercase tracking-wider mb-3 ${!sidebarOpen ? 'hidden' : ''}`}>
                        Pages
                    </h3>


                    <div className="mb-2">
                        <button
                            onClick={() => toggleSection('setup')}
                            className="flex items-center justify-between w-full px-3 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                            <div className="flex items-center">
                                <img src='/icons/setup.png' className="mr-3 h-4 w-4" />
                                {sidebarOpen && 'Setup'}
                            </div>
                            {sidebarOpen && (expandedSections.setup ? (
                                <ChevronDown className="h-4 w-4" />
                            ) : (
                                <ChevronRight className="h-4 w-4" />
                            ))}
                        </button>
                        {sidebarOpen && expandedSections.setup && (
                            <div className="ml-6 mt-1 space-y-1">
                                <Link
                                    href="/dashboard/setup/create-office"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Create Office
                                </Link>
                                <Link
                                    href="/dashboard/setup/create-user"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Create User
                                </Link>
                                <Link
                                    href="/dashboard/setup/add-guards-category"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Add Guards Category
                                </Link>
                            </div>
                        )}
                    </div>


                    <div className="mb-2">
                        <button
                            onClick={() => toggleSection('registration')}
                            className="flex items-center justify-between w-full px-3 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                            <div className="flex items-center">
                                <img src='/icons/registration.png' className="mr-3 h-4 w-4" />
                                {sidebarOpen && 'Registration'}
                            </div>
                            {sidebarOpen && (expandedSections.registration ? (
                                <ChevronDown className="h-4 w-4" />
                            ) : (
                                <ChevronRight className="h-4 w-4" />
                            ))}
                        </button>
                        {sidebarOpen && expandedSections.registration && (
                            <div className="ml-6 mt-1 space-y-1">
                                <Link
                                    href="/dashboard/registration/guards-registration"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Guards Registration
                                </Link>
                                <Link
                                    href="/dashboard/registration/employee-registration"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Employee Registration
                                </Link>
                                <Link
                                    href="/dashboard/registration/clients-registration"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Clients Registration
                                </Link>
                                <Link
                                    href="/dashboard/registration/location-registration"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Location Registration
                                </Link>
                            </div>
                        )}
                    </div>


                    <div className="mb-2">
                        <button
                            onClick={() => toggleSection('deployment')}
                            className="flex items-center justify-between w-full px-3 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                            <div className="flex items-center">
                                <img src='/icons/deployment.png' className="mr-3 h-4 w-4" />
                                {sidebarOpen && 'Deployment'}
                            </div>
                            {sidebarOpen && (expandedSections.deployment ? (
                                <ChevronDown className="h-4 w-4" />
                            ) : (
                                <ChevronRight className="h-4 w-4" />
                            ))}
                        </button>
                        {sidebarOpen && expandedSections.deployment && (
                            <div className="ml-6 mt-1 space-y-1">
                                <Link
                                    href="/dashboard/deployment/assign-guards"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Assign Guards
                                </Link>
                                <Link
                                    href="/dashboard/deployment/assign-supervisor"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Assign Supervisor
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Attendance */}
                    <div className="mb-2">
                        <button
                            onClick={() => toggleSection('attendance')}
                            className="flex items-center justify-between w-full px-3 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                            <div className="flex items-center">
                                <img src='/icons/deployment.png' className="mr-3 h-4 w-4" />
                                {sidebarOpen && 'Attendance'}
                            </div>
                            {sidebarOpen && (expandedSections.attendance ? (
                                <ChevronDown className="h-4 w-4" />
                            ) : (
                                <ChevronRight className="h-4 w-4" />
                            ))}
                        </button>
                        {sidebarOpen && expandedSections.attendance && (
                            <div className="ml-6 mt-1 space-y-1">
                                <Link
                                    href="/dashboard/attendance/location-attendance"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Location Attendance
                                </Link>

                            </div>
                        )}
                    </div>

                    {/* Pay Roll */}
                    <div className="mb-2">
                        <button
                            onClick={() => toggleSection('payroll')}
                            className="flex items-center justify-between w-full px-3 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                            <div className="flex items-center">
                                <img src='/icons/payroll.png' className="mr-3 h-4 w-4" />
                                {sidebarOpen && 'Pay Roll'}
                            </div>
                            {sidebarOpen && (expandedSections.payroll ? (
                                <ChevronDown className="h-4 w-4" />
                            ) : (
                                <ChevronRight className="h-4 w-4" />
                            ))}
                        </button>
                        {sidebarOpen && expandedSections.payroll && (
                            <div className="ml-6 mt-1 space-y-1">
                                <Link
                                    href="/dashboard/payroll/location-attendance-sheet"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Generate Payroll
                                </Link>
                               


                            </div>
                        )}
                    </div>

                    {/* Accounts & Finance */}
                    <div className="mb-2">
                        <button
                            onClick={() => toggleSection('accounts')}
                            className="flex items-center justify-between w-full px-3 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                            <div className="flex items-center">
                                <img src='/icons/accounts.png' className="mr-3 h-4 w-4" />
                                {sidebarOpen && 'Accounts & Finance'}
                            </div>
                            {sidebarOpen && (expandedSections.accounts ? (
                                <ChevronDown className="h-4 w-4" />
                            ) : (
                                <ChevronRight className="h-4 w-4" />
                            ))}
                        </button>
                        {sidebarOpen && expandedSections.accounts && (
                            <div className="ml-6 mt-1 space-y-1">
                                <Link
                                    href="/dashboard/accounts/petty-cash"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Petty Cash
                                </Link>
                                <Link
                                    href="/dashboard/accounts/payment-vouchers"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Payment Vouchers
                                </Link>
                                <Link
                                    href="/dashboard/accounts/accounts-allowance"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Allowance & Deductions
                                </Link>
                                <Link
                                    href="/dashboard/accounts/accounts-invoices"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Invoices
                                </Link>
                                <Link
                                    href="/dashboard/accounts/accounts-general-ledger"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -General Ledger
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Sales Monitor */}
                    <div className="mb-2">
                        <button
                            onClick={() => toggleSection('salesMonitor')}
                            className="flex items-center justify-between w-full px-3 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                            <div className="flex items-center">
                                <img src='/icons/accounts.png' className="mr-3 h-4 w-4" />
                                {sidebarOpen && 'Sales Monitor'}
                            </div>
                            {sidebarOpen && (expandedSections.salesMonitor ? (
                                <ChevronDown className="h-4 w-4" />
                            ) : (
                                <ChevronRight className="h-4 w-4" />
                            ))}
                        </button>
                        {sidebarOpen && expandedSections.salesMonitor && (
                            <div className="ml-6 mt-1 space-y-1">
                                <Link
                                    href="/dashboard/sales-monitor/leads"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Leads
                                </Link>
                                <Link
                                    href="/dashboard/sales-monitor/qualify"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Qualify
                                </Link>
                                <Link
                                    href="/dashboard/sales-monitor/meetings"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Meetings
                                </Link>
                                <Link
                                    href="/dashboard/sales-monitor/proposals"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Proposals
                                </Link>
                                <Link
                                    href="/dashboard/sales-monitor/opportunity"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Opportunity
                                </Link>
                                <Link
                                    href="/dashboard/sales-monitor/opportunity"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Closed & Won
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Performance Manager */}
                    <div className="mb-2">
                        <button
                            onClick={() => toggleSection('performanceManager')}
                            className="flex items-center justify-between w-full px-3 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                            <div className="flex items-center">
                                <img src='/icons/accounts.png' className="mr-3 h-4 w-4" />
                                {sidebarOpen && 'Performance Manager'}
                            </div>
                            {sidebarOpen && (expandedSections.performanceManager ? (
                                <ChevronDown className="h-4 w-4" />
                            ) : (
                                <ChevronRight className="h-4 w-4" />
                            ))}
                        </button>
                        {sidebarOpen && expandedSections.performanceManager && (
                            <div className="ml-6 mt-1 space-y-1">
                                <Link
                                    href="/dashboard/performance-manager/initiate-event"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Inititate Event
                                </Link>
                                <Link
                                    href="/dashboard/performance-manager/profile-rating"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Profile Rating
                                </Link>

                            </div>
                        )}
                    </div>

                    {/* Inventory Management */}
                    <div className="mb-2">
                        <button
                            onClick={() => toggleSection('inventoryManagement')}
                            className="flex items-center justify-between w-full px-3 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                            <div className="flex items-center">
                                <img src='/icons/accounts.png' className="mr-3 h-4 w-4" />
                                {sidebarOpen && 'Inventory Management'}
                            </div>
                            {sidebarOpen && (expandedSections.inventoryManagement ? (
                                <ChevronDown className="h-4 w-4" />
                            ) : (
                                <ChevronRight className="h-4 w-4" />
                            ))}
                        </button>
                        {sidebarOpen && expandedSections.inventoryManagement && (
                            <div className="ml-6 mt-1 space-y-1">
                                <Link
                                    href="/dashboard/inventory-management/vendors"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Vendors
                                </Link>
                                <Link
                                    href="/dashboard/inventory-management/create-po"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Create PO
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Complaints */}
                    <div className="mb-2">
                        <button
                            onClick={() => toggleSection('complaints')}
                            className="flex items-center justify-between w-full px-3 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                            <div className="flex items-center">
                                <img src='/icons/accounts.png' className="mr-3 h-4 w-4" />
                                {sidebarOpen && 'Complaints'}
                            </div>
                            {sidebarOpen && (expandedSections.complaints ? (
                                <ChevronDown className="h-4 w-4" />
                            ) : (
                                <ChevronRight className="h-4 w-4" />
                            ))}
                        </button>
                        {sidebarOpen && expandedSections.complaints && (
                            <div className="ml-6 mt-1 space-y-1">
                                <Link
                                    href="/dashboard/complaints/complaints"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Complaints List
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Notifications & Announcements */}
                    <div className="mb-2">
                        <button
                            onClick={() => toggleSection('notifications')}
                            className="flex items-center justify-between w-full px-3 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                            <div className="flex items-center">
                                <img src='/icons/accounts.png' className="mr-3 h-4 w-4" />
                                {sidebarOpen && 'Notifications'}
                            </div>
                            {sidebarOpen && (expandedSections.notifications ? (
                                <ChevronDown className="h-4 w-4" />
                            ) : (
                                <ChevronRight className="h-4 w-4" />
                            ))}
                        </button>
                        {sidebarOpen && expandedSections.notifications && (
                            <div className="ml-6 mt-1 space-y-1">
                                <Link
                                    href="/dashboard/notifications-announcements/notifications"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Notifications List
                                </Link>
                                <Link
                                    href="/dashboard/notifications-announcements/add-new-notification"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Add new Notification
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Reports */}
                    <div className="mb-2">
                        <button
                            onClick={() => toggleSection('reports')}
                            className="flex items-center justify-between w-full px-3 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                            <div className="flex items-center">
                                <img src='/icons/accounts.png' className="mr-3 h-4 w-4" />
                                {sidebarOpen && 'Reports'}
                            </div>
                            {sidebarOpen && (expandedSections.reports ? (
                                <ChevronDown className="h-4 w-4" />
                            ) : (
                                <ChevronRight className="h-4 w-4" />
                            ))}
                        </button>
                        {sidebarOpen && expandedSections.reports && (
                            <div className="ml-6 mt-1 space-y-1">
                                <Link
                                    href="/dashboard/reports/offices"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Offices
                                </Link>
                                <Link
                                    href="/dashboard/reports/employees"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Employees
                                </Link>
                                <Link
                                    href="/dashboard/reports/guards"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Guards
                                </Link>
                                <Link
                                    href="/dashboard/reports/clients"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Clients
                                </Link>
                                <Link
                                    href="/dashboard/reports/location"
                                    className="block px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-100 rounded-md"
                                >
                                    -Location
                                </Link>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar; 