import React, { useCallback } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import { useDropzone } from 'react-dropzone'

//header
import Header from './component/common/Header'
import Banner from './component/common/Banner'
import axios from 'axios'

const pageName = '商品上架'

const bgStyle = {
  flex: 1,
  height: '300vh',
  padding: '0',
}

const Product = () => {
  async function upLoadImg(params) {
    console.log('params', params)
    let res = await axios.post('http://localhost:5500/upLoadImg', params)

    console.log('res', res)
  }

  function getBase64Image(img) {
    let canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height
    let ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0, img.width, img.height)
    let ext = img.src.substring(img.src.lastIndexOf('.'), 1).toLowerCase()
    let dataURL = canvas.toDataURL('image/', ext)
    return dataURL
  }

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files

    acceptedFiles.forEach(file => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        // Do whatever you want with the file contents
        console.log('reader.result', reader.result)
        const binaryStr = reader.result
        console.log(binaryStr)
        upLoadImg({ imgData: reader.result })
      }
      reader.readAsArrayBuffer(file)
    })
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <>
      <div id="page-wrapper" className="gray-bg" style={bgStyle}>
        <Header />
        <Banner pageName={pageName} />
        <div>商品上架</div>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
      </div>
    </>
  )
}

export default Product
