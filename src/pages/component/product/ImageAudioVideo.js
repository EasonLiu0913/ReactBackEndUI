import React from 'react'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

const ImageAudioVideo = () => {
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    return { url: 'http://localhost:5500/backend/upLoadimg' }
  }

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file)
  }

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  //   const getUploadParams = ({ meta }) => {
  //     const url = 'http://localhost:5500/backend/upLoadimg'
  //     return { url, meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` } }
  //   }

  //   const handleChangeStatus = ({ meta }, status) => {
  //     console.log(status, meta)
  //   }

  //   const handleSubmit = (files, allFiles) => {
  //     console.log(files.map(f => f.meta))
  //     allFiles.forEach(f => f.remove())
  //   }

  return (
    // <Dropzone
    //   getUploadParams={getUploadParams}
    //   onChangeStatus={handleChangeStatus}
    //   onSubmit={handleSubmit}
    //   accept="image/*,audio/*,video/*"
    //   inputContent={(files, extra) =>
    //     extra.reject ? 'Image, audio and video files only' : 'Drag Files'
    //   }
    //   styles={{
    //     dropzoneReject: { borderColor: 'red', backgroundColor: '#DAA' },
    //     inputLabel: (files, extra) => (extra.reject ? { color: 'red' } : {}),
    //   }}
    // />
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*,audio/*,video/*"
      styles={{
        dropzone: { width: 600, height: 400 },
      }}
    />
  )
}

export default ImageAudioVideo
