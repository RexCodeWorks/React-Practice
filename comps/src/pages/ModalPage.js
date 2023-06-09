import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };
    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button primary onClick={handleClose}>I Accept</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar} >
            <p>Here is an important agreement for you to accept</p>
        </Modal>
    );

    return (
        <div className="relative">
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum ex nec elit scelerisque viverra. Quisque condimentum augue nibh. Proin et orci eu urna congue cursus ac in arcu. Proin a consequat libero. Morbi dignissim ex et nisl pulvinar, eu consequat augue eleifend. Fusce commodo massa vitae semper faucibus. Suspendisse sit amet purus dolor. Nam vitae orci sit amet enim feugiat interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ac sem sed metus venenatis iaculis. Quisque justo orci, sodales id scelerisque vel, faucibus ac sapien. Fusce nisl diam, condimentum vitae congue et, condimentum vel elit. Nulla ut quam neque. Nullam dignissim, nisl eget semper vestibulum, magna augue tincidunt mauris, vitae gravida quam dui a augue. In dignissim eros dui, eu bibendum elit maximus nec. Nulla semper velit id augue consequat, quis vehicula sem vulputate.
                In lacinia congue finibus. Cras congue, ex tincidunt aliquet posuere, nulla arcu dapibus odio, hendrerit facilisis turpis justo eget arcu. Suspendisse sodales, lacus placerat molestie porta, velit justo ullamcorper risus, nec vestibulum massa lorem vel tortor. Suspendisse potenti. Vestibulum ultricies dolor eget ipsum faucibus, eget ultricies nunc euismod. Morbi rhoncus sit amet felis eu porta. Etiam porttitor metus sed lectus varius, vel lobortis odio accumsan. Aliquam nec rhoncus magna, sed imperdiet mi. Quisque a hendrerit massa. Donec auctor sit amet libero eu tempor. Integer dignissim felis in elit congue, eu mattis ipsum accumsan. Vivamus quis pharetra nunc, sit amet maximus quam. Vivamus id ligula nec diam congue porta molestie ac neque. Nam volutpat lobortis enim, ut bibendum diam. Vestibulum id hendrerit nisl.
                Donec at nisi sagittis, ultricies odio vel, pharetra eros. Donec volutpat venenatis mi ac ultrices. Fusce dui nisl, tincidunt mattis ullamcorper a, aliquam non eros. Nulla vulputate magna et nisl elementum, sit amet efficitur tortor lacinia. Vestibulum vel convallis est. Aenean in condimentum tellus. Fusce faucibus, turpis id fermentum pulvinar, risus tellus hendrerit tellus, ac lobortis ante libero nec risus. Etiam mollis aliquam mauris, et eleifend neque aliquam vitae. Curabitur dui elit, ornare nec maximus et, fermentum a risus. Nam blandit felis eu arcu pulvinar bibendum. Sed consequat nibh vel ornare tempus. Donec vulputate tellus sit amet nulla viverra, elementum placerat turpis sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in feugiat nunc. Nunc ultricies ultrices sem ut tincidunt.
                In hac habitasse platea dictumst. Maecenas bibendum pulvinar lacinia. Nam tincidunt, lorem faucibus congue efficitur, nibh tortor mattis sapien, non gravida lectus quam quis urna. Phasellus faucibus velit elit, accumsan ullamcorper eros porta nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eget neque libero. Nunc elementum molestie eros at hendrerit. Vivamus quis dui et urna luctus pulvinar iaculis vel metus. Phasellus auctor nunc et elit ultricies commodo. Vestibulum semper justo urna, vitae malesuada nisl egestas vitae. Quisque nec tellus luctus, ullamcorper purus sed, fringilla lorem.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum ex nec elit scelerisque viverra. Quisque condimentum augue nibh. Proin et orci eu urna congue cursus ac in arcu. Proin a consequat libero. Morbi dignissim ex et nisl pulvinar, eu consequat augue eleifend. Fusce commodo massa vitae semper faucibus. Suspendisse sit amet purus dolor. Nam vitae orci sit amet enim feugiat interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ac sem sed metus venenatis iaculis. Quisque justo orci, sodales id scelerisque vel, faucibus ac sapien. Fusce nisl diam, condimentum vitae congue et, condimentum vel elit. Nulla ut quam neque. Nullam dignissim, nisl eget semper vestibulum, magna augue tincidunt mauris, vitae gravida quam dui a augue. In dignissim eros dui, eu bibendum elit maximus nec. Nulla semper velit id augue consequat, quis vehicula sem vulputate.
                In lacinia congue finibus. Cras congue, ex tincidunt aliquet posuere, nulla arcu dapibus odio, hendrerit facilisis turpis justo eget arcu. Suspendisse sodales, lacus placerat molestie porta, velit justo ullamcorper risus, nec vestibulum massa lorem vel tortor. Suspendisse potenti. Vestibulum ultricies dolor eget ipsum faucibus, eget ultricies nunc euismod. Morbi rhoncus sit amet felis eu porta. Etiam porttitor metus sed lectus varius, vel lobortis odio accumsan. Aliquam nec rhoncus magna, sed imperdiet mi. Quisque a hendrerit massa. Donec auctor sit amet libero eu tempor. Integer dignissim felis in elit congue, eu mattis ipsum accumsan. Vivamus quis pharetra nunc, sit amet maximus quam. Vivamus id ligula nec diam congue porta molestie ac neque. Nam volutpat lobortis enim, ut bibendum diam. Vestibulum id hendrerit nisl.
                Donec at nisi sagittis, ultricies odio vel, pharetra eros. Donec volutpat venenatis mi ac ultrices. Fusce dui nisl, tincidunt mattis ullamcorper a, aliquam non eros. Nulla vulputate magna et nisl elementum, sit amet efficitur tortor lacinia. Vestibulum vel convallis est. Aenean in condimentum tellus. Fusce faucibus, turpis id fermentum pulvinar, risus tellus hendrerit tellus, ac lobortis ante libero nec risus. Etiam mollis aliquam mauris, et eleifend neque aliquam vitae. Curabitur dui elit, ornare nec maximus et, fermentum a risus. Nam blandit felis eu arcu pulvinar bibendum. Sed consequat nibh vel ornare tempus. Donec vulputate tellus sit amet nulla viverra, elementum placerat turpis sodales. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in feugiat nunc. Nunc ultricies ultrices sem ut tincidunt.
                In hac habitasse platea dictumst. Maecenas bibendum pulvinar lacinia. Nam tincidunt, lorem faucibus congue efficitur, nibh tortor mattis sapien, non gravida lectus quam quis urna. Phasellus faucibus velit elit, accumsan ullamcorper eros porta nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eget neque libero. Nunc elementum molestie eros at hendrerit. Vivamus quis dui et urna luctus pulvinar iaculis vel metus. Phasellus auctor nunc et elit ultricies commodo. Vestibulum semper justo urna, vitae malesuada nisl egestas vitae. Quisque nec tellus luctus, ullamcorper purus sed, fringilla lorem.
            </p>
        </div>
    );
}

export default ModalPage;