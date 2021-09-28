import {
  FormControl,
  FormHelperText,
  InputLabel,
  makeStyles,
  NativeSelect,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  formControl: {
    margin: `${theme.spacing(3)}px 0`,
  },
}));

export default function CountrySelector({ countries, value, handleChange }) {
  const styles = useStyle();

  return (
    <FormControl className={styles.formControl}>
      <InputLabel htmlFor="country-selector" shrink>
        Quốc gia:
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleChange}
        inputProps={{
          name: "country",
          id: "country-selector",
        }}
      >
        {countries.map((item) => {
          return (
            <option value={item.ISO2.toLowerCase()} key={item.ISO2}>
              {item.Country}
            </option>
          );
        })}
      </NativeSelect>
      <FormHelperText>Lựa chọn quốc gia</FormHelperText>
    </FormControl>
  );
}
