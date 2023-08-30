namespace Backend.Esri
{
    public class Point
    {
        public double X { get; set; }

        public double Y { get; set; }

        public SpatialReference SpatialReference { get; set; } = new SpatialReference();
    }
}
