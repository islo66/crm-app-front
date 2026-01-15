import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);

export const DAY_SHORT_MONTH_YEAR_FORMAT = "DD MMM YYYY";
export const DAY_TIME_SHORT_MONTH_YEAR_FORMAT = "DD MMM YYYY HH:mm";
export const YEAR_MONTH_DAY_FORMAT = "YYYY-MM-DD";
export const DAY_MONTH_YEAR_FORMAT = "DD.MM.YYYY";
export const TIME_FORMAT = "HH:mm";

export const today = dayjs();
export const getYear = (date: Date | string): string => dayjs(date).format("YYYY");

type ValueType = string | undefined | null;

export const formatDayjsDate = (value: ValueType, format?: string) => {
  if (!value) return null;

  return dayjs(value).format(format ?? YEAR_MONTH_DAY_FORMAT);
};

export const formatTime = (date: Date | string): string => dayjs(date).format("HH:mm");

export const formatWithLocale = (value: ValueType, format?: string) => {
  if (!value) return null;

  //TODO replace with locale after add i18n
  const locale = "en";

  return dayjs(value)
    .locale(locale)
    .format(format ?? DAY_SHORT_MONTH_YEAR_FORMAT);
};

export const getDayjsDate = <T>(value: T) => {
  if (typeof value !== "string") return null;

  return dayjs(value);
};

export const getDayjsTime = <T>(value: T) => {
  if (typeof value !== "string") return null;

  return dayjs(value, TIME_FORMAT);
};

export const sortDates = (arg1: string, arg2: string) => dayjs(arg1).valueOf() - dayjs(arg2).valueOf();

export const toSubtract = (value: number) => dayjs().subtract(value, "years");

export const calculateAgeOld = (birthDate: Date) => today.year() - Number(getYear(birthDate));
