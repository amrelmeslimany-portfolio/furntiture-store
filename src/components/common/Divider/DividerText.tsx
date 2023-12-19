const DividerText = ({ text }: { text: string }) => {
    return (
        <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white "></div>
            </div>
            <div className="relative flex justify-center">
                <span className="px-2 bg-white/90 text-gray-400 text-sm rounded-lg">{text}</span>
            </div>
        </div>
    );
};

export default DividerText;
