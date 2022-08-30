import {useState} from 'react';
import Modal from './Modal';

function ModalContainer(){
    const [modalOpen, setModalOpen] = useState(false);
    const modalClose = () => {
        setModalOpen((modalOpen) => !modalOpen);
    }

    return(
        <div>
            <button onClick={modalClose} className="h-full border rounded-md border-slate-300 hover:bg-blue-400">
                모달 사용 예시
            </button>
            {modalOpen && <Modal modalClose={modalClose} isRandom={false}></Modal>}
        </div>
    );
}

export default ModalContainer;

//ModalContainer에서 음식 id 값 넘겨주기
//음식 id를 기준으로 Modal 안에 Food 인자값 변경해주기