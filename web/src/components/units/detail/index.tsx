import { Fragment, useEffect, useState } from "react";
import api from "@/apis";
import { Item } from "@/apis/type";
import { useParams } from "react-router-dom";
import _ from "lodash";
import Header from "./header";
import Contents from "./contents";

function ItemDetailLayout() {
  const params = useParams();
  const [detail, setDetail] = useState<Item | any>();

  useEffect(() => {
    if (!_.isUndefined(params.id)) {
      api.items.getDetail(params.id).then((response) => setDetail(response));
    }
  }, []);

  return (
    <Fragment>
      <Header name={detail?.name} />
      <Contents detail={detail} />
    </Fragment>
  );
}

export default ItemDetailLayout;
