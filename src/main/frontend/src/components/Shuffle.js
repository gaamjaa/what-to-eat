import {useState} from 'react';
import Modal from './Modal';

function Shuffle() {
    const [modalOpen, setModalOpen] = useState(false);
    const modalClose = () => {
        setModalOpen((modalOpen) => !modalOpen);
    }

    return (
        <div>
            <button onClick={modalClose} className="h-full border rounded-md border-slate-300 hover:bg-blue-400">
                <img src="/img/shuffle.png" className="w-3 mx-2"/>
            </button>
            {modalOpen && <Modal modalClose={modalClose} isRandom={true}></Modal>}
        </div>
    );
}

export default Shuffle;