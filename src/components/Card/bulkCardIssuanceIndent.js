import React from 'react'
import './card.scss'
import { Button } from 'react-bootstrap'
import { FileDrop } from 'react-file-drop'


function BulkCardIssuanceIndent() {
    return (
        <div className='top_div'>
            <div className='filedrop_cont'>
                <FileDrop
                    onFrameDragEnter={(event) => console.log('onFrameDragEnter', event)}
                    onFrameDragLeave={(event) => console.log('onFrameDragLeave', event)}
                    onFrameDrop={(event) => console.log('onFrameDrop', event)}
                    onDragOver={(event) => console.log('onDragOver', event)}
                    onDragLeave={(event) => console.log('onDragLeave', event)}
                    onDrop={(files, event) => console.log('onDrop!', files, event)}
                    >
                    <p>Drop your files here, or <a href=''>browse</a></p>
                    <p className='file'>Supports: Only XLSX File, 500kb</p>
                </FileDrop>
                <Button type='submit'>Submit</Button>
            </div>
        </div>
    )
}

export default BulkCardIssuanceIndent