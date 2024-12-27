import { CircularProgress, SxProps } from "@mui/material";
import { Container } from "@mui/system";
import {
  Fragment,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface IProps {
  updateOffset: (offest: number) => void;
  limit?: number;
  offset?: number;
  itemRenderer: (item: any, ref: MutableRefObject<any>) => JSX.Element;
  containerProps?: SxProps;
  isLoading?: boolean;
  getItems: () => any[];
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
  }, [ offest, updateOffset]);

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
    <Container sx={containerProps}>
      {isLoading && <CircularProgress />}
      {getItems().map((item, index) => {
        return (
          <Fragment key={index}>{itemRenderer(item, observerRef)}</Fragment>
        );
      })}
    </Container>
  );
};

export default InfiniteList;
