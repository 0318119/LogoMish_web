import React, { useState, useCallback } from 'react'
import port from '../assets/css/port.module.css'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./Json";

const VideoPort = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);
    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };


    return (
        <>
            <section className={`${port.webPortfolioSection}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 p-0">
                            <div className={`${port.webPortfolioMainBox}`}>
                                <div className={`${port.webPortfolioImagesBox}`} id="brandingPortfolioImagesBox">
                                    <Gallery photos={photos} onClick={openLightbox} />
                                    <ModalGateway>
                                        {viewerIsOpen ? (
                                            <Modal onClose={closeLightbox}>
                                                <Carousel
                                                    currentIndex={currentImage}
                                                    views={photos.map(x => ({
                                                        ...x,
                                                        srcset: x.srcSet,
                                                    }))}
                                                />
                                            </Modal>
                                        ) : null}
                                    </ModalGateway>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VideoPort