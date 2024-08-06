import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartUpdateInput = {
  items?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
