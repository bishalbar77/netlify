import React, { useMemo } from "react";
import isArray from "lodash/fp/isArray";
import isString from "lodash/fp/isString";
import "./component.scss";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
// import FormHelperText from '@material-ui/core/FormHelperText';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: `100%`,
    textAlign: `center`,
  },
  input: {
    display: "none",
  },
  label: {},
  button: {
    width: `100%`,
  },
}));
let BtnColor = "primary";
const acceptVariants = {
  word: ".pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  images: "image/*",
  doc: "image/*,.pdf",
  excel:
    ".xlsx,.xls,.csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
};
const changeLabel = (e) => {
  document.getElementById(
    e.target.id
  ).parentElement.children[1].firstChild.firstChild.innerText = e.target.value
    ? e.target.value.replace("C:\\fakepath\\", "").substring(0, 30) + "..."
    : "SELECT AGAIN";
  if (!e.target.value) {
    BtnColor = "secondary";
  }
};

const makeAcceptString = (accept) => {
  if (!accept || !accept.length) {
    return "";
  }

  if (isString(accept)) {
    return acceptVariants[accept] ? acceptVariants[accept] : accept;
  }

  if (isArray(accept)) {
    const len = accept.length;
    return accept.reduce((acc, curr, currIndex) => {
      if (acceptVariants[curr]) {
        acc += acceptVariants[curr];
      } else if (curr && curr.length && curr.trim().length) {
        acc += curr.trim();
      }

      if (len > 1 && currIndex < len - 1) {
        acc += ",";
      }

      return acc;
    }, "");
  }

  return "";
};

const FileInput = ({
  accept,
  multiple = false,
  id = "file-input",
  inputProps,
  name,
  labelProps,
  buttonProps,
  onChange,
  label,
}) => {
  const classes = useStyles();

  const acceptString = useMemo(() => makeAcceptString(accept), [accept]);
  return (
    <div className="File_Input">
      <FormControl className={classes.formControl}>
        <input
          id={id}
          accept={acceptString}
          className={classes.input}
          multiple={multiple}
          type="file"
          name={name}
          onChange={(onChange, changeLabel)}
          {...inputProps}
        />
        <label className={classes.label} htmlFor={id} {...labelProps}>
          <Button
            variant="contained"
            color={BtnColor}
            component="span"
            className={classes.button}
            {...buttonProps}
          >
            {label}
          </Button>
        </label>
      </FormControl>
    </div>
  );
};

export default FileInput;
