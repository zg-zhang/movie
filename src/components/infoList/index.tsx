import React from "react";

import InfoListTitle from "./title";

interface infoListProps {
    title: string
}

function InfoList(props: infoListProps) {
    const { title } = props

    return (
        <>
            <InfoListTitle title={title} />
        </>
    )
}

export default React.memo(InfoList)