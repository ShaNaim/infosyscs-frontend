function checkAndFormateFiles(files, type) {
	varifyFileInput(files);
	const formData = new FormData();
	for (let i = 0; i < files.length; i++) {
		if (type === "pdf") {
			if (!checkIfPdf(files[i].type))
				throw { message: "All Files Must Be of Type 'PDF' ", fileError: true };
		} else if (type === "docx") {
			if (!checkIfDocx(files[i].type))
				throw { message: "All Files Must Be of Type 'DOCX' ", fileError: true };
		} else {
			throw { message: "Please Select A File Type", fileError: true };
		}
		formData.append("files", files[i]);
	}
	return formData;
}

function checkIfPdf(type) {
	if (type === "application/pdf") return true;
	return false;
}
function checkIfDocx(type) {
	if (type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
		return true;
	return false;
}

function varifyFileInput(files) {
	if (!files) throw { message: "Please Select File", fileError: true };
	if (files.length > 5) throw { message: "Maximum 5 Files", fileError: true };
	if (files.length == 0) throw { message: "Please Select File", fileError: true };
}

module.exports = checkAndFormateFiles;
