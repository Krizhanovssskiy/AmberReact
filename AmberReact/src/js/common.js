jQuery(function($) {
    $('#circle1').circleProgress({
        value: 0.5,
        startAngle: -1.5708,
        size: 210,
        fill: "#fff",
        emptyFill: "#35c8bc",
        thickness: "5"
    });

    $('#circle2').circleProgress({
        value: 0.65,
        startAngle: -1.5708,
        size: 210,
        fill: "#fff",
        emptyFill: "#35c8bc",
        thickness: "5"

    });

    $('#circle3').circleProgress({
        value: 0.9,
        startAngle: -1.5708,
        size: 210,
        fill: { color: "#fff", image: "" },
        emptyFill: "#35c8bc",
        thickness: "5"

    });
});