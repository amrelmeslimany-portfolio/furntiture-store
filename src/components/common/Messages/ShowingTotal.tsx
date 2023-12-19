import { padStartZero } from "../../../utils/functions";

const ShowingTotal = ({ showing, total }: { showing: number; total: number }) => {
    return (
        <p className="text-sm">
            Showing <b>{padStartZero(showing)}</b> of <b>{padStartZero(total)}</b>
        </p>
    );
};

export default ShowingTotal;
