using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Order
    {
        public int Id { get; set; }

        [Required]
        public string SenderCity { get; set; } = null!;

        [Required]
        public string SenderAddress { get; set; } = null!;

        [Required]
        public string ReceiverCity { get; set; } = null!;

        [Required]
        public string ReceiverAddress { get; set; } = null!;

        [Range(0.01, double.MaxValue)]
        public double Weight { get; set; }

        public DateTime PickupDate { get; set; }
    }
}