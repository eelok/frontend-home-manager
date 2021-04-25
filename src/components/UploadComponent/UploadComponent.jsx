import react from 'react';

const UploadComponent = (props) => {
    return (
        <form enctype="multipart/form-data">
            Select image to upload:
            <input type="file" id="file" name="counterImage"/>
            <input type="submit" value="Upload Image" id="submit"/>
        </form>
    )

}
export default UploadComponent;