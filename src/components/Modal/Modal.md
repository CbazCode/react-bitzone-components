```js
import useModal from './modalHook.js'
import {ModalBody, ModalHeader} from './ModalElements.js'
import Modal from './Modal'
import Button from '../Button/Button.js'

const {showModal, openModal, setShowModal} = useModal();


<>
    <Button 
        bgColor="danger"  size="md" rounded="soft" color="white" onClick={openModal}>
        I'am modal
    </Button>
    
    <Modal showModal={showModal} setShowModal={setShowModal}  >
            <ModalHeader>Are you ready?</ModalHeader>
            <ModalBody>Get exclusive access to our next launch. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis minima ratione placeat facere illo fuga non id aliquam cumque molestias! </ModalBody>
            <Button bgColor="info" size="xl" rounded="full" color="white">
                Button
            </Button>
    </Modal>
</>
```

```js
import useModal from './modalHook.js'
import {ModalBody, ModalHeader} from './ModalElements.js'
import Modal from './Modal'
import Button from '../Button/Button.js'
import img from './modal.jpg'

const {showModal, openModal, setShowModal} = useModal();


<>
    <Button 
        bgColor="primary"  size="md" rounded="soft" color="white" onClick={openModal}>
        I'am modal
    </Button>
    
    <Modal showModal={showModal} setShowModal={setShowModal}  withImage={true} sourceImage={img}>
            <ModalHeader>Are you ready?</ModalHeader>
            <ModalBody>Get exclusive access to our next launch. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis minima ratione placeat facere illo fuga non id aliquam cumque molestias! </ModalBody>
            <Button bgColor="info" size="xl" rounded="full" color="white">
                Button
            </Button>
    </Modal>
</>
```

```js
import useModal from './modalHook.js'
import {ModalBody, ModalHeader} from './ModalElements.js'
import Modal from './Modal'
import Button from '../Button/Button.js'

const {showModal, openModal, setShowModal} = useModal();


<>
    <Button 
        bgColor="secondary"  size="md" rounded="soft" color="white" onClick={openModal}>
        I'am modal
    </Button>
    
    <Modal showModal={showModal} setShowModal={setShowModal}  appear="right">
            <ModalHeader>Are you ready?</ModalHeader>
            <ModalBody>Get exclusive access to our next launch. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis minima ratione placeat facere illo fuga non id aliquam cumque molestias! </ModalBody>
            <Button bgColor="info" size="xl" rounded="full" color="white">
                Button
            </Button>
    </Modal>
</>
```