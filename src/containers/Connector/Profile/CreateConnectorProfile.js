import React from "react";
import TextField from "@material-ui/core/TextField";
import { FormControl, Grid} from "@material-ui/core";
import FileInput from "../../../Shared/component/FileInput";

export default function CreateConnectorProfile() {
  return (
    <div style={{ padding: `5%` }}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12} md={4} sm={4} style={{ textAlign: `center` }}>
            <FormControl style={{ width: `100%` }}>
              <TextField
                style={{ margin: `2%` }}
                id="pan"
                label="PAN"
                variant="outlined"
              />
              <FileInput
                type="file"
                style={{ margin: `5%` }}
                id="pan_document"
                label="PAN Document"
                variant="outlined"
                buttonProps={{ color: "primary" }}
                name="document[[pan]]"
              ></FileInput>
            </FormControl>
            <FormControl style={{ width: `100%` }}>
              <TextField
                style={{ margin: `2%` }}
                id="aadhaar"
                label="Aadhar"
                variant="outlined"
              />
              <FileInput
                type="file"
                style={{ margin: `5%` }}
                id="aadhaar_document"
                label="Aadhaar Document"
                variant="outlined"
                buttonProps={{ color: "primary" }}
                name="document[aadhaar]"
              ></FileInput>
            </FormControl>
          </Grid>
          {/* <Grid item xs={4} md={4} sm={6} style={{ textAlign: `center` }}>
            
          </Grid> */}
          <Grid item xs={12} md={4} sm={4} style={{ textAlign: `center` }}>
            <FormControl style={{ width: `100%` }}>
              <TextField
                style={{ margin: `2%` }}
                id="address"
                label="Address"
                variant="outlined"
                multiline
                rows={4}
              />
              <TextField
                style={{ margin: `2%` }}
                id="pincode"
                label="Pincode"
                variant="outlined"
              />
              <TextField
                style={{ margin: `2%` }}
                id="phone"
                label="Phone Number"
                variant="outlined"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4} sm={4} style={{ textAlign: `center` }}>
            <FormControl style={{ width: `100%`, textAlign: `center` }}>
              <div style={{ textAlign: `center`, width: `100%` }}>
                <img
                  style={{ maxWidth: `58%` }}
                  alt="Product"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png"
                />
              </div>
              <FileInput
                label="Select Logo"
                name="logo"
                buttonProps={{ color: "primary" }}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
