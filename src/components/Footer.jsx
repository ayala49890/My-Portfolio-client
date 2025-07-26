import { useSelector } from "react-redux";
import { useState } from "react";

export default function Footer() {
    const profile = useSelector((state) => state.profile.data);
    const [copyMessage, setCopyMessage] = useState({ field: null, status: null });

    function copyToClipboard(text, field) {
        if (navigator.clipboard) {
            navigator.clipboard
                .writeText(text)
                .then(() => {
                    setCopyMessage({ field, status: "success" });
                    setTimeout(() => setCopyMessage({ field: null, status: null }), 5000);
                })
                .catch(() => {
                    setCopyMessage({ field, status: "error" });
                    setTimeout(() => setCopyMessage({ field: null, status: null }), 5000);
                });
        } else {
            setCopyMessage({ field, status: "error" });
            setTimeout(() => setCopyMessage({ field: null, status: null }), 5000);
        }
    }

    return (
        <footer
            id="contact"
            className="bg-[#0e1a20] text-white w-full shadow-inner mt-20 "
        >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-[#fce8c7] font-medium gap-6">
                <div className="w-full md:w-1/3 text-center md:text-left">
                    <h2 className="text-xl font-bold mb-2">Contact Me</h2>
                    <div className="mb-2 flex items-center justify-center md:justify-start">
                        <p
                            className="cursor-pointer hover:underline"
                            onClick={() => copyToClipboard(profile.email, "email")}
                            title="Click to copy email"
                        >
                            📧 {profile.email}
                        </p>
                        {copyMessage.field === "email" && (
                            <span
                                className={`ml-2 text-sm ${copyMessage.status === "success" ? "text-green-400" : "text-red-400"}`}
                            >
                                {copyMessage.status === "success" ? "Copied!" : "Failed to copy!"}
                            </span>
                        )}
                    </div>

                    <div className="mb-2 flex items-center justify-center md:justify-start">
                        <p
                            className="cursor-pointer hover:underline"
                            onClick={() => copyToClipboard(profile.phone, "phone")}
                            title="Click to copy phone"
                        >
                            📞 {profile.phone}
                        </p>
                        {copyMessage.field === "phone" && (
                            <span
                                className={`ml-2 text-sm ${copyMessage.status === "success" ? "text-green-400" : "text-red-400"}`}
                            >
                                {copyMessage.status === "success" ? "Copied!" : "Failed to copy!"}
                            </span>
                        )}
                    </div>

                    <p className="mt-2">
                        🔗{" "}
                        <a
                            href={profile.gitHubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            GitHub
                        </a>
                    </p>
                </div>

                <div className="w-full md:w-1/3 text-center">
                    <a
                        href="Ayala Hirshfeld.pdf"
                        download
                        className="inline-block bg-[#fce8c7] hover:bg-[#e6d3b4] text-[#0e1a20] font-semibold py-2 px-4 rounded transition duration-200"
                    >
                        📄 Download CV
                    </a>

                </div>

                <div className="w-full md:w-1/3 text-center md:text-right text-sm text-[#ccc]">
                    &copy; {new Date().getFullYear()} {profile.fullName}. All rights reserved.
                </div>
            </div>

        </footer>
    );
}
