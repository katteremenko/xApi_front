import React from 'react'

const PageOne = () => {
    return (
        <>
            <div className="title">
                Introduction to Geology
                <div className="titleunderbar"></div>
            </div>
            <div className="body-content">
                <p>Geology (from the Ancient Greek γῆ, gē ("earth") and -λoγία, -logia, ("study of", "discourse")) is an
                    Earth science concerned with the solid Earth, the rocks of which it is composed, and the processes
                    by which
                    they change over time. Geology can also include the study of the solid features of any terrestrial
                    planet or
                    natural satellite such as Mars or the Moon. Modern geology significantly overlaps all other Earth
                    sciences,
                    including hydrology and the atmospheric sciences, and so is treated as one major aspect of
                    integrated Earth
                    system science and planetary science.</p>
            </div>

            <div className="body-video">
                <div style={{width: '100%', position: 'relative'}}>
                    <video data-objectid="https://example.com/vid/id1924" data-name="Mountains">
                        <source src="video/mountains_31175.mp4"/>
                    </video>
                    <div className="video-start-overlay">
                        <div className="msg">(click or tap here to play and pause the video)</div>
                    </div>
                    <div className="video-complete-overlay hidden">
                        <div className="msg">Video completed and recorded.</div>
                    </div>
                </div>
            </div>

            <div className="body-content">
                <p>Geology describes the structure of the Earth on and beneath its surface, and the processes that have
                    shaped
                    that structure. It also provides tools to determine the relative and absolute ages of rocks found in
                    a given
                    location, and also to describe the histories of those rocks. By combining these tools, geologists
                    are
                    able to chronicle the geological history of the Earth as a whole, and also to demonstrate the age of
                    the
                    Earth. Geology provides the primary evidence for plate tectonics, the evolutionary history of life,
                    and the
                    Earth's past climates.
                </p>

                <p>
                    Geologists use a wide variety of methods to understand the Earth's structure and evolution,
                    including field
                    work, rock description, geophysical techniques, chemical analysis, physical experiments, and
                    numerical
                    modelling. In practical terms, geology is important for mineral and hydrocarbon exploration and
                    exploitation, evaluating water resources, understanding of natural hazards, the remediation of
                    environmental
                    problems, and providing insights into past climate change. Geology is a major academic discipline,
                    and it
                    plays an important role in geotechnical engineering.
                </p>

                <p className="text-attribution">
                    (This course uses material from the Wikipedia article
                    <a href="https://en.wikipedia.org/wiki/Geology" target="_blank">"Geology"</a>, which is released
                    under the
                    <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank">Creative Commons
                        Attribution-Share-Alike License 3.0</a>.)
                </p>
            </div>

        </>
    )
}

export default PageOne