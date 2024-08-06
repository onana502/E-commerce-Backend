import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartCreateInput = {
  items?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
