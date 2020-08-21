import React from 'react'
import Db from '../firebase/FbConfig'
import './AllNotes.css'

// const db=firebase.firestore()

class AllNotes extends React.Component {
    componentDidMount(){
        let notes=document.querySelector('.notes-parent')
        // db.collection('Items').get().then(snapshot => {
        //     snapshot.docs.forEach(doc => {
        //         this.setState({ Notes: [...this.state.Notes, {data:doc.data(),id:doc.id}]})
        //     })
        //     console.log(this.state.Notes);
        // })
        const renderCafe=(doc)=>{
            let div=document.createElement('div')
            let div2 = document.createElement('div')
            let p = document.createElement('p')
            let h5 = document.createElement('h5')

            div.className='col-12 col-md-6 col-lg-3 p-2'
            div2.className ='rounded px-3'
            div2.style.wordWrap="break-word"
            div2.style.border="1px black solid"
            h5.textContent = doc.data().title
            h5.style.fontFamily='Roboto'
            h5.style.fontWeight=`700`
            p.style.fontFamily = `'Roboto`
            p.style.fontWeight = `500`
            p.textContent=doc.data().body
            p.className='text-flow'
            div2.appendChild(h5)
            div2.appendChild(p)
            div.appendChild(div2)

            notes.prepend(div)
        }

        Db.collection('Items').orderBy('timestamp','asc').onSnapshot(snapshot => {
            let changes = snapshot.docChanges()
            changes.forEach(change => {
                if (change.type === "added") {
                    renderCafe(change.doc)
                 } //else if (change.type == "removed") {
                //     let li = cafeList.querySelector('[data-id=' + change.doc.id + ']')
                //     cafeList.removeChild(li)
                // }
            });

        })
    }
    render(){
        return(
            <div className='' style={{paddingRight:'100px',paddingLeft:"100px",marginTop:"100px"}}>
                <div className='notes-parent row' >
                </div>
            </div>
        )
    }
}

export default AllNotes