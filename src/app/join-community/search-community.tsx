
import React from "react";
import {
  Container,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { trpc } from "@trpc-client/client";
import { useEffect, useMemo, useState } from "react";
import useDebounce from "@/utils/debounce";
import { useSnackbar } from "@/components/snackbar/Provider";
import InfiniteList from "@/components/infinite-list";
import CommunityCard, { ICommunity } from "@/components/cards/community-card";

const SearchCommunity = () => {
  const { showSnackbar } = useSnackbar();
  const [name, setName] = useState("");
  const [debouncedVal, setDebouncedVal] = useState("");
  const debouncedFn = useDebounce(setDebouncedVal, 300);
  const [offset, setOffset] = useState(0);

  const payload = useMemo(() => {
    return {
      name: debouncedVal,
      offset: offset,
      limit: 15,
    };
  }, [debouncedVal, offset]);

  const { data, isFetching, isError, error } =
    trpc.getAllCommunities.useQuery(payload);

  const memoData = useMemo(() => {
    return data as ICommunity[];
  }, [data]);

  useEffect(() => {
    if (isError) {
      showSnackbar(`Failed to fetch communities, ${error?.message}`, "error");
    }
  }, [isError, showSnackbar]);

  useEffect(() => {
    debouncedFn(name);
  }, [name, debouncedFn]);

  return (
    <Container>
      <Typography variant="h6" gutterBottom>
        Join a community
      </Typography>
      <OutlinedInput
        placeholder="search for a community"
        value={name}
        onChange={(e) => setName(e.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon color={"primary"} />
          </InputAdornment>
        }
      />
      <InfiniteList
        limit={15}
        offset={offset}
        containerProps={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "1rem", flexDirection: "row" }}
        updateOffset={setOffset}
        itemRenderer={(item: ICommunity) => <CommunityCard community={item} />}
        getItems={() => memoData}
        isLoading={isFetching}
      />
    </Container>
  );
};

export default SearchCommunity;
