<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table</title>
    <style>
        table{
            width:350px; border-collapse: collapse;
        }
        td{
            padding: 6px;
        }
    </style>
</head>
<body>
    <table border="2">
        <thead>
            <th colspan="5" style="text-align: left;">Personal prononus</th>
        </thead>
        <tbody>
            <tr>
                <td colspan="3"><br></td>
                <th>Subject</th>
                <th>Object</th>
            </tr>
            <tr>
                <th rowspan="5" >Singular</th>
                <th colspan="2" style="text-align: left;">1st Person</th>
                <td>I</td>
                <td>me</td>
            </tr>
            <tr>
                <th colspan="2" style="text-align: left;">2nd Person</th>
                <td>you</td>
                <td>you</td>
            </tr>
            <tr>
                <th rowspan="3" style="text-align: left;">3rd Person</th>
                <td><ion-icon name="male-outline"></ion-icon></td>
                <td>he</td>
                <td>him</td>
                <tr>
                    <td><ion-icon name="female-outline"></ion-icon></td>
                    <td>she</td>
                    <td>her</td>
                </tr>
                <tr>
                    <td>o</td>
                    <td>it</td>
                    <td>it</td>
                </tr>
            </tr>
            <tr>
                <th rowspan="3">Plural</th>
                <th colspan="2" style="text-align: left;">1st Person</th>
                <td>we</td>
                <td>us</td>
                <tr>
                    <th colspan="2" style="text-align: left;">2nd Person</th>
                    <td>you</td>
                    <td>you</td>
                </tr>
                <tr>
                    <th colspan="2" style="text-align: left;">3rd Person</th>
                    <td>they</td>
                    <td>them</td>
                </tr>
            </tr>
        </tbody>
    </table>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>
</html>
