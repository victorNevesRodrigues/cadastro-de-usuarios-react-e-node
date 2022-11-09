import React from "react";
import { SectionForm } from "./styles"

function ContainerItens({children, ...props}) {

    return <SectionForm {...props}>{children}</SectionForm>
}

export default ContainerItens