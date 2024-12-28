/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { CircularProgress, SxProps } from "@mui/material";
import { Box } from "@mui/system";
import {
  Fragment,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { ICommunity } from "../cards/community-card";

interface IProps {
  updateOffset: (offest: number) => void;
  limit?: number;
  offset?: number;
  itemRenderer: (
    item: any,
    ref: MutableRefObject<HTMLDivElement>,
    index: number
  ) => JSX.Element;
  containerProps?: SxProps;
  isLoading?: boolean;
  getItems: () => ICommunity[];
}

const InfiniteList = ({
  updateOffset,
  limit = 10,
  offset = 0,
  containerProps,
  itemRenderer,
  isLoading,
  getItems,
}: IProps) => {
  const observerRef = useRef<HTMLDivElement | null>(null);
  const [offest, setOffset] = useState(offset);

  const update = useCallback(() => {
    updateOffset(offest);
  }, [offest, updateOffset]);

  useEffect(() => {
    update();
  }, [offest, update]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          setOffset((prev) => prev + limit);
        }
      },
      { threshold: 1 }
    );
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.disconnect();
      }
    };
  }, [fetch, limit, offset]);

  return (
    <Box sx={containerProps}>
      {isLoading && <CircularProgress />}
      {getItems()?.map((item: ICommunity, index: number) => {
        return (
          <Fragment key={index}>
            {itemRenderer(item, observerRef as MutableRefObject<HTMLDivElement>, index)}
          </Fragment>
        );
      })}
    </Box>
  );
};

export default InfiniteList;
