namespace Backend.Esri
{
    public class Polyline
    {
        public bool HasZ { get; set; } = false;
        public bool HasM { get; set; } = false;

        public List<double[][]> Paths { get; set; } = new List<double[][]>();

        public SpatialReference SpatialReference { get; set; } = new SpatialReference();
    }
}
