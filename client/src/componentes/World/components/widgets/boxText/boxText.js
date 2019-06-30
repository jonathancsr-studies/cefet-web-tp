import React, { Component } from 'react'
import './boxText.css'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { getText } from '../../../../WorldFunctions'
import { saveText } from '../../../../WorldFunctions'
const jwt = require("jsonwebtoken")
const userId = window.location.href.split('World')[1]
const userLogado = jwt.decode(localStorage.usertoken).id;
const editavel = userId==userLogado? true : false;


class boxText extends Component {

    constructor(props){
        super(props)
        this.findText();
        this.state = {
          data : null
        }
        
      }

    findText=()=>{
    
        const user = {
          id_user: userId
        }
        console.log("Editavel == " + editavel)
        getText(user).then(res => {
            console.log("BUSCANDO TEXT")
            console.log(res.data[0].text)
            this.state.data = res.data[0].text;
            this.forceUpdate();
        })
        
    }

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
                        data= {this.state.data}
                        onInit={editor => {
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ data });

                            const boxText = {
                                id_user: userId,
                                text : data
                              }
                              saveText(boxText).then(res => {
                                console.log("Salvo!")
                                this.forceUpdate();
                              })
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