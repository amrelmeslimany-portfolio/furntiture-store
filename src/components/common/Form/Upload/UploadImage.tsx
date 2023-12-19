import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BiImageAdd, BiTrashAlt } from "react-icons/bi";
import IconCircleButton from "../../Button/CircleIcon";

const UploadImage = () => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	const onDrop = useCallback((acceptedFiles: File[]) => {
		const file = acceptedFiles[0];
		// Display the selected image
		setSelectedImage(URL.createObjectURL(file));
		// You can also handle file upload here or send it to the server
		// For simplicity, we'll just log the file details
		console.log("Selected File:", file);
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: {
			"image/*": [".jpeg", ".png", ".webp", ".gif"],
		}, // Only accept image files
		multiple: false, // Allow only a single file to be selected
	});

	const onDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		setSelectedImage(null);
	};

	return (
		<div
			{...getRootProps()}
			className={`flex relative items-center justify-center flex-col overflow-hidden border-2 border-white   mx-auto cursor-pointer w-44 h-44 rounded-[50%] ${
				isDragActive ? " bg-primary/20 shadow-lg " : "bg-primary/5 shadow "
			}`}
		>
			<input {...getInputProps()} />
			{/* Whem Not Selected Image */}
			{!selectedImage && (
				<>
					<BiImageAdd className="text-6xl text-primary/75 mb-2" />
					<span className="text-sm text-secondaryText">
						{isDragActive ? "Drop Image" : "Choose Image"}
					</span>
				</>
			)}
			{/* When Select Image */}
			{selectedImage && !isDragActive && (
				<>
					<img
						src={selectedImage}
						alt="Selected Profile"
						className="w-full h-full object-cover object-center"
					/>
					<IconCircleButton
						onClick={onDelete}
						icon={<BiTrashAlt className="text-red-700 group-hover:text-white" />}
						className="absolute bottom-2 w-8 h-8 bg-white group"
					/>
				</>
			)}
		</div>
	);
};

export default UploadImage;
