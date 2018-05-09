import { withStyles } from "material-ui/styles";
import Tooltip from "material-ui/Tooltip";
import Typography from "material-ui/Typography";
import * as moment from "moment";
import * as React from "react";

interface DateFormatterProps {
  date: string;
  inputFormat?: string;
  outputFormat?: string;
  showTooltip?: boolean;
  locale?: string;
}

const decorate = withStyles(theme => ({ root: { display: "inline" } }));
const DateFormatter = decorate<DateFormatterProps>(
  ({
    classes,
    date,
    inputFormat,
    outputFormat,
    showTooltip = true,
    locale
  }) => {
    const momentDate = inputFormat ? moment(date, inputFormat) : moment(date);
    if (moment().diff(momentDate, "days") > 1) {
      return (
        <Typography className={classes.root}>
          {momentDate.format(outputFormat || "DD.MM.YYYY HH:mm")}
        </Typography>
      );
    }
    if (showTooltip) {
      return (
        <Tooltip
          title={momentDate.format(outputFormat || "DD.MM.YYYY HH:mm")}
          placement="bottom"
        >
          <Typography className={classes.root}>
            {momentDate.locale(locale || "en").fromNow()}
          </Typography>
        </Tooltip>
      );
    }
    return (
      <Typography className={classes.root}>
        {momentDate.locale(locale || "en").fromNow()}
      </Typography>
    );
  }
);
export default DateFormatter;