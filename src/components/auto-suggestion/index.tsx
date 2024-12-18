import { Box, Chip, Divider, OutlinedInput, Typography } from "@mui/material";
import {
  autoSuggestionContainerSxProps,
  chipContainerSxProps,
  dropdownSxProps,
} from "./styles";
import { useEffect, useState } from "react";
import { fontActiveColor } from "@/theme/color-palette";
import { mockCommunities, mockSuggestions } from "./data";
import useDebounce from "@/utils/debounce";

interface IProps {
  placeholder?: string;
  showSuggestions?: boolean;
  prefix?: string;
  callback?: (selected: any[]) => void;
}

const AutoSuggestion = ({
  placeholder,
  showSuggestions,
  callback,
  prefix,
}: IProps) => {
  const [open, setOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [debounce, setDebounce] = useState<any>(null);
  const [selected, setSelected] = useState<any>([]);

  const debounced = useDebounce(setDebounce, 500);

  useEffect(() => {
    debounced(searchVal);
  }, [searchVal]);

  useEffect(() => {
    if (selected && selected.length) {
      callback?.(selected);
    }
  }, [selected]);

  const getChip = (
    content: any,
    key: number,
    disabled?: boolean,
    onDelete?: () => void
  ) => {
    return (
      <Chip
        key={key}
        label={`${prefix}${content.name}`}
        variant={"filled"}
        color="primary"
        disabled={disabled}
        onDelete={onDelete}
        onClick={() => {
          setSelected((prev: any) => [...prev, content]);
        }}
        sx={{ fontWeight: "bold", cursor: "pointer" }}
      />
    );
  };

  const getSuggestions = () => {
    return (
      <Box>
        <Typography>{"suggested for you"}</Typography>
        <Box sx={chipContainerSxProps()}>
          {mockSuggestions.map((suggestion) =>
            getChip(suggestion, suggestion.id, selected.includes(suggestion))
          )}
        </Box>
        <Divider sx={{ margin: "1rem 0", backgroundColor: fontActiveColor }} />
      </Box>
    );
  };

  const getSearchResults = () => {
    return (
      <Box>
        <Typography>{debounce && "search results"}</Typography>
        <Box sx={chipContainerSxProps()}>
          {mockCommunities.map((suggestion) =>
            getChip(suggestion, suggestion.id, selected.includes(suggestion))
          )}
        </Box>
      </Box>
    );
  };

  const inputComponent = (props: any) => {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        onClick={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        <Box sx={chipContainerSxProps(selected.length)}>
          {selected.map((content: any, index: number) =>
            getChip(content, index, false, () =>
              setSelected(
                selected.filter((item: any) => item.id !== content.id)
              )
            )
          )}
        </Box>
        <input
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          {...props}
        />
      </Box>
    );
  };

  return (
    <Box sx={autoSuggestionContainerSxProps}>
      <OutlinedInput
        inputMode={"search"}
        inputComponent={(props) => inputComponent(props)}
        placeholder={placeholder ?? "search here..."}
        sx={{
          borderBottomRightRadius: open ? 0 : 20,
          borderBottomLeftRadius: open ? 0 : 20,
          borderBottomWidth: open ? 0 : 1.5,
        }}
        fullWidth
      />
      {open && (
        <Box sx={dropdownSxProps}>
          {showSuggestions && !debounce && getSuggestions()}
          {getSearchResults()}
        </Box>
      )}
    </Box>
  );
};

export default AutoSuggestion;

/**
 * search
 * suggested when user clicks on input
 * all the suggestions should in form on chips
 * multiple chips can be selected
 * user can remove the selected chips
 */
