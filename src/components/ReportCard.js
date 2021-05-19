import { Card, CardContent, CardHeader } from "@material-ui/core";
import Typography from '@material-ui/core/Typography'

export default function NoteCard({report}) {
    return (
        <div>
            <Card elevation={1}>
                <CardHeader
                    title={report.heading}
                    subheader={`Report Time: ${report.dateTime}`}
                />
                <CardContent>
                    <Typography variant='body2' color='textSecondary'>
                        {report.content}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}