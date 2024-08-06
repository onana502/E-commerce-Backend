import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  items?: JsonFilter;
  shippingAddress?: StringNullableFilter;
  status?: "Option1";
  totalAmount?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
