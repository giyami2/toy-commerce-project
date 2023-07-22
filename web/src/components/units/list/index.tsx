import { Fragment, useState } from "react";
import Header from "./header";
import Category from "./category";
import Items from "./items";

function ItemsLayout() {
  const [searchText, setSearchText] = useState<string>("");
  const [categoryId, setCategoryId] = useState<number>(999);

  return (
    <Fragment>
      <Header searchText={searchText} onChange={setSearchText} />
      <Category categoryId={categoryId} onChange={setCategoryId} />
      <Items searchText={searchText} categoryId={categoryId} />
    </Fragment>
  );
}

export default ItemsLayout;
