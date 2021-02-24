import {useState, useContext} from "react";
import {Store} from "../../store";
import {useHistory} from  "react-router-dom"
import firebase from "firebase/app";
import {getFirestone} from "../../db/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationTriangle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

import "../../styles/CheckOut.css"

const CheckOut = () => {
    const db = getFirestone();
    const history = useHistory ()
    const [data, setData] = useContext(Store);
    const [sell, completSell] = useState(false);
    const [name, changeName] = useState({value: "", check:null})
    const [lastName, changeLastName] = useState({value: "", check:null})
    const [email, changeEmail] = useState({value: "", check:null})
    const [tel, changeTel] = useState({value: "", check:null})
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email:"",
        tel: "",
    })
    const [idBuy, setIdBuy] = useState('');

    const handleChangeName = (e) => {
        changeName({...name, value: e.target.value})
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const handleChangeLastName = (e) => {
        changeLastName({...lastName, value: e.target.value})
        setFormData({...formData, [e.target.lastName]: e.target.value});
    }
    const handleChangeEmail = (e) => {
        changeEmail({...name, value: e.target.value})
        setFormData({...formData, [e.target.email]: e.target.value});
    }
    const handleChangeTlf = (e) => {
        changeTel({...name, value: e.target.value})
        setFormData({...formData, [e.target.cell]: e.target.value});
    }

    const purchaseData = {
        user: formData,
        items: data.items,
        totalPrice: data.totalPrice,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }


    const handleSubmitForm = (e) => {
        e.preventDefault();

        db.collection('sells').add(purchaseData)
        .then(({id}) => {
            completSell(true);
            setIdBuy(id);
        })
        .catch(e => console.log(e));


        setTimeout(() => {
            setData({
                items: [],
                qty: 0,
                totalPrice: 0,
            }); 
            history.push("/");
        }, 3000) 
    }

    const regularExpresion = {
	name: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
	lastName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	tel: /^\d{7,14}$/, // 7 a 14 numeros.
    }

    const validationName = () => {
            if(regularExpresion.name.test(name.value)){
                changeName({...name, check: "true"})
                console.log(name.check, "imput correcto")
            }
        else{
            console.log("imput incorrecto")
                changeName({...name, check: "false"})
                console.log(name.check, "imput incorrecto")
        }
    }

    const validationLastName = () => {
            if(regularExpresion.lastName.test(lastName.value)){
                changeLastName({...lastName, check: "true"})
            }
        else{   
                changeLastName({...lastName, check: "false"})
        }
    }

        const validationEmail = () => {
            if(regularExpresion.email.test(email.value)){
                changeEmail({...email, check: "true"})
            }
        else{
                changeEmail({...email, check: "false"})
        }
    }

    const validationTel = () => {
                if(regularExpresion.tel.test(tel.value)){
                    changeTel({...tel, check: "true"})
                }
            else{
                    changeTel({...tel, check: "false"})
            }
        }


    return (
        <section className="checkout">
        <div className="container">
            <div className="titleDiv">
                <h2>CHECKOUT</h2>
            </div>
            {
        !sell ?
        <form onSubmit={handleSubmitForm}>
            <div>
                <div className="imputGroup">
                    <input type="text" className={name.check === "false" ? "imputError": "imputClass" || name.check === "true" ? "imputClass": "imputError" ||  name.check === "null" ? "imputError": "imputClass"} maxlength="15" value={name.value} onChange={handleChangeName} onKeyUp={validationName} onBlur={validationName} name="name" placeholder="Name"  pattern="[a-zA-Z]" required />
                    <FontAwesomeIcon icon={faExclamationCircle} className={name.check === "false" ? "iconError": "icon" || name.check === "true" ? "icon": "iconError" ||  name.check === "null" ? "iconError": "icon"} />
                </div>
                    <p className="errorMsj">NOMBRE</p>
            </div>

            <div>
                <div className="imputGroup">
                    <input type="text" className={lastName.check === "false" ? "imputError": "imputClass" || lastName.check === "true" ? "imputClass": "imputError" ||  lastName.check === "null" ? "imputError": "imputClass"} value={lastName.value} onChange={handleChangeLastName} name="lastName" placeholder="Last Name" onKeyUp={validationLastName} onBlur={validationLastName} required  />  
                    <FontAwesomeIcon icon={faExclamationCircle}className={lastName.check === "false" ? "iconError": "icon" || lastName.check === "true" ? "icon": "iconError" ||  lastName.check === "null" ? "iconError": "icon"}/>
                </div>
                    <p className="errorMsj">APELLIDO</p> 
            </div>

            <div>
                <div className="imputGroup"> 
                    <input type="email" className={email.check === "false" ? "imputError": "imputClass" || email.check === "true" ? "imputClass": "imputError" ||  email.check === "null" ? "imputError": "imputClass"} value={email.value} onChange={handleChangeEmail} onKeyUp={validationEmail} onBlur={validationEmail}  name="email" placeholder="E-mail" required />
                    <FontAwesomeIcon icon={faExclamationCircle } className="icon"/>
                </div>
                    <p className="errorMsj">EMAIL</p>
            </div>

            <div>
                <div className="imputGroup">
                    <input type="tel" className={tel.check === "false" ? "imputError": "imputClass" || tel.check === "true" ? "imputClass": "imputError" ||  tel.check === "null" ? "imputError": "imputClass"} value={tel.value} onChange={handleChangeTlf} onKeyUp={validationTel} onBlur={validationTel}name="tel" placeholder="Telephone" required />
                    <FontAwesomeIcon icon={faExclamationCircle } className="icon"/>
                </div>
                    <p className="errorMsj">TLF</p>
            </div>
            { false && <div className="errorTextDiv">
                <p>
                    <FontAwesomeIcon icon={faExclamationTriangle} />
                    <b>Error:</b>  Por favor rellenar el formulario completo para realizar la compra
                </p>
            </div>}
            <div className="buttonDiv">
                <button className="buttonBuy">Comprar</button>
                <p className="purchaseText">Realizando Compra...</p>
            </div>
        </form> :
        <div className="checkDiv">
                <p>La compra se realizó correctamente, tu número de seguimiento es: {idBuy}</p>
        </div>
    }
        </div>
    </section>
    )
}

export default CheckOut;

