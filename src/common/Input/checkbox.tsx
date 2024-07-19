import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./styles";
import { Label } from "../TextArea/styles";

const CheckBoxInput = ({ type, name }: { name: string; type: string }) => (
  <div
    style={{
      display: "flex",
      alignItems: "baseline",
    }}
  >
    <StyledInput
      style={{
        width: "fit-content",
        marginRight: "10px",
      }}
      type={type}
      name={name}
      id={name}
    />
    <Label htmlFor={name}>{name}</Label>
  </div>
);

export default withTranslation()(CheckBoxInput);
