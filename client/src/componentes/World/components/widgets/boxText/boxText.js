import React, { Component } from 'react'
import './boxText.css'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


class boxText extends Component {
    componentDidMount() {

    }
    onChange(content) {
        console.log('onChange', content);
    }
    render() {
        return (
            <div className='containerWidgets' ref='containerWidgets'>
                <ul className="ul-widgets">
                    <li>
                        {/*<Gallery></Gallery>*/}


                    </li>
                </ul>

                <div className="boxText-dimension">
                    <CKEditor
                        editor={ClassicEditor}
                        data="<p>Adicione aqui suas principais anotações!</p><br/><strong><p>E customize como desejar. </p></strong> <br/><p></p>
                        <p></p>"
                        onInit={editor => {
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                        }}
                        onBlur={editor => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={editor => {
                            console.log('Focus.', editor);
                        }}
                    />
                </div>

            </div>

        )
    }
}

export default boxText