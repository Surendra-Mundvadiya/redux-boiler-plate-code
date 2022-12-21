import React from "react";
import "./Index.scss";
import "./Height.scss";
import "./Width.scss";
import "./Margin.scss";
import "./Padding.scss";
import "./Typography.scss";
import "./Flex.scss";
import "./Button.scss";
const CssPropvider = (props) => {
    const { children } = props;
    return <>{children}</>;
};

export default CssPropvider;
