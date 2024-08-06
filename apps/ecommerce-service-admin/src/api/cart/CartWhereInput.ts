import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartWhereInput = {
  id?: StringFilter;
  items?: JsonFilter;
  user?: UserWhereUniqueInput;
};
