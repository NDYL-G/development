// Power Query Placeholder
// In a real Power Query editor, this would represent M code steps.
let
    Source = Csv.Document(File.Contents("ons-employment.csv"),[Delimiter=",", Columns=3, Encoding=1252, QuoteStyle=QuoteStyle.None]),
    PromotedHeaders = Table.PromoteHeaders(Source, [PromoteAllScalars=true])
in
    PromotedHeaders