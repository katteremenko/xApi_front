import React from 'react'

const PageTwo = () => {
    return (
        <>

            <div className="title">
                Geologic Materials
                <div className="titleunderbar"></div>
            </div>
            <div className="body-content">
                <h2>Geologic Materials</h2>

                <p>The majority of geological data comes from research on solid Earth materials. These typically fall
                    into one
                    of two categories: rock and unlithified material.</p>

                <h3>Rock</h3>

                <p>The majority of research in geology is associated with the study of rock, as rock provides the
                    primary record
                    of the majority of the geologic history of the Earth. There are three major types of rock: igneous,
                    sedimentary, and metamorphic. The rock cycle illustrates the relationships among them (see
                    diagram).</p>

                <div className="bodyimg" style={{backgroundImage: "url('img/cycle1.jpg')"}}>
                    <img src="img/cycle1.jpg" alt="cycle1.jpg" role="img"/>
                </div>

                <p>When a rock solidifies or crystallizes from melt (magma or lava), it is an igneous rock. This rock
                    can be
                    weathered and eroded, then redeposited and lithified into a sedimentary rock. It can then be turned
                    into a
                    metamorphic rock by heat and pressure that change its mineral content, resulting in a characteristic
                    fabric.
                    All three types may melt again, and when this happens, new magma is formed, from which an igneous
                    rock may
                    once more solidify.</p>

                <h4>Tests</h4>

                <p>To study all three types of rock, geologists evaluate the minerals of which they are composed. Each
                    mineral
                    has distinct physical properties, and there are many tests to determine each of them. The specimens
                    can be
                    tested for:</p>

                <ul>
                    <li>Luster: Quality of light reflected from the surface of a mineral. Examples are metallic, pearly,
                        waxy,
                        dull.
                    </li>
                    <li>Color: Minerals are grouped by their color. Mostly diagnostic but impurities can change a
                        mineral's
                        color.
                    </li>
                    <li>Streak: Performed by scratching the sample on a porcelain plate. The color of the streak can
                        help name
                        the mineral.
                    </li>
                    <li>Hardness: The resistance of a mineral to scratching.</li>
                    <li>Breakage pattern: A mineral can either show fracture or cleavage, the former being breakage of
                        uneven
                        surfaces, and the latter a breakage along closely spaced parallel planes.
                    </li>
                    <li>Specific gravity: the weight of a specific volume of a mineral.</li>
                    <li>Effervescence: Involves dripping hydrochloric acid on the mineral to test for fizzing.</li>
                    <li>Magnetism: Involves using a magnet to test for magnetism.</li>
                    <li>Taste: Minerals can have a distinctive taste, such as halite (which tastes like table salt).
                    </li>
                    <li>Smell: Minerals can have a distinctive odor. For example, sulfur smells like rotten eggs.</li>
                </ul>

                <h3>Unlithified material</h3>
                <p>Geologists also study unlithified materials (referred to as drift), which typically come from more
                    recent
                    deposits. These materials are superficial deposits that lie above the bedrock. This study is often
                    known
                    as Quaternary geology, after the Quaternary period of geologic history.</p>

                <h4>Magma</h4>
                <p>However, unlithified material does not only include sediments. Magma is the original unlithified
                    source of
                    all igneous rocks. The active flow of molten rock is closely studied in volcanology, and igneous
                    petrology
                    aims to determine the history of igneous rocks from their final crystallization to their original
                    molten
                    source.</p>
            </div>
        </>
    )
}

export default PageTwo