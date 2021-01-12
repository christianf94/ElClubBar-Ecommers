import "../../styles/Modal.css"


export const Modal = ({showModal, setShowModal, alt, src}) => {
    return (
        <>

            {showModal ? (
                <Background className="modal-div">
                    <ModalWrapper className="modal-wrapper" showMmodal={showModal}>
                        <ModalImg src={require(src)} atl={alt} className="modal-img"/>
                        <ModalContent className="modal-content">
                            <h1>LOL</h1>
                            <p>LOLES</p>
                        <button className="modal-button">Ok</button>
                        </ModalContent>
                        <button className="modal-close"aria-label="Close Modal" onClick={() => setShowModal(prev => !prev)}>X</button>
                    </ModalWrapper>
                </Background>
            ): null}
        </>
    )
}