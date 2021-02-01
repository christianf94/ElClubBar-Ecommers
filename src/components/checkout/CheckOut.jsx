import {useState, useContext} from "react";
import {Store} from "../../store";
import firebase from "firebase/app";
import {getFirestone} from "../../db/index.js";
import "../../styles/CheckOut.css"

const CheckOut = () => {
    const db = getFirestone();
    const [data, setData] = useContext(Store);
    const [sell, completSell] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        tel: "",
    })
    const [idBuy, setIdBuy] = useState('');

    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
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
            <input type="text" value={formData.name} onChange={handleChangeInput} name="name" placeholder="Name" />
                        <input type="text" value={formData.lastName} onChange={handleChangeInput} name="lastName" placeholder="Last Name" />
                        <input type="email" value={formData.email} onChange={handleChangeInput} name="email" placeholder="E-mail" />
                        <input type="tel" value={formData.tel} onChange={handleChangeInput} name="tel" placeholder="Telephone" />
            
            <button>Pagar</button>
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

