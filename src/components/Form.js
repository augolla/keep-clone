import React from 'react'
import './Form.css'
import {FiSmile,FiVolume2,FiPlus} from 'react-icons/fi'
import { BsCardImage } from 'react-icons/bs'
import { AiOutlineBgColors, AiOutlinePicCenter} from 'react-icons/ai'
import Db from '../firebase/FbConfig'


// const db=firebase.firestore()

class Form extends React.Component{
    constructor(){
        super()
        this.state={
            title:'',
            body:''
        }
    }
    componentDidMount(){
        const title=document.querySelector('[placeholder="Title"]')
        const note = document.querySelector('[placeholder="Add Note..."]')
        const form = document.querySelector('.form')
        const arr=[title,note]

        arr.forEach(item=>{
            item.addEventListener('focus',(e)=>{
                title.style.display='block'
            })
        })
        form.addEventListener('submit',(e)=>{
            e.preventDefault()
            note.value=''
            title.value=''
            let ddd = new Date()
            const fullDate = `${ddd.getDate()}/${ddd.getMonth() + 1}/${ddd.getFullYear()}@${ddd.getHours()}:${ddd.getMinutes()}:${ddd.getSeconds()}`
            console.log(fullDate);
            Db.collection('Items').add({
                body:this.state.body,
                title:this.state.title,
                timestamp:fullDate
            })
            this.setState({title:'',body:''})

        })
        
    }
    handleChange=(e)=>{
        e.preventDefault()
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        return(
            <div className='Form container mt-5'>
                <div className='d-flex justify-content-center'>
                    <form className="w-75 w-md-75 border rounded form z-depth-3">

                        <div className="form-group">
                            <textarea  name="title" rows="1" className="form-control" placeholder='Title' onChange={this.handleChange}>
                            </textarea>
                        </div>

                        <div className="form-group ta2">
                            <textarea name="body" rows="3" className="form-control" placeholder='Add Note...' onChange={this.handleChange}>
                            </textarea>
                        </div>

                        <div className='row w-100'>
                            <div className='col-1 d-flex p-1 justify-content-center' data-title="Change color">
                                <AiOutlineBgColors size='1.5rem'/>
                            </div>
                            <div className='col-1 d-flex p-1 justify-content-center' data-title="Add image">
                                <BsCardImage size="1.3rem"/>
                            </div>
                            <div className='col-1 d-flex p-1 justify-content-center' data-title="Add emoji">
                                <FiSmile color='' size="1.3rem"/>
                            </div>
                            <div className='col-1 d-flex p-1 justify-content-center' data-title="Add voice-note">
                                <FiVolume2 size="1.3rem"/>
                            </div>
                            <div className='col-1 d-flex p-1 justify-content-center' data-title="Category">
                                <AiOutlinePicCenter size="1.3rem"/>
                            </div>
                        </div>
                        <button className='btn halfway-fab'  type='submit'>
                            <FiPlus size='1.6rem'/>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form